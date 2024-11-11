import React, { useState, useEffect } from "react";
import { NavLink, Link, useParams, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCampersById } from "../../redux/campers/operations";
import {
  selectCamperById,
  selectLoading,
  selectError
} from "../../redux/campers/selectors";

import css from "./CamperPage.module.css";
import snippets from "../../assets/images/snippets.svg";

import Loading from "../../components/Loading/Loading";
import ModalImage from "react-modal-image";
import clsx from "clsx";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function CamperPage() {
  const { camperId } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector((state) => selectCamperById(state, camperId));
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (camperId) {
      dispatch(getCampersById(camperId));
    }
  }, [camperId, dispatch]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!camper) {
    return <div>Camper not found</div>;
  }

  const reviewsCount =
    camper.reviews && Array.isArray(camper.reviews) ? camper.reviews.length : 0;
  const gallery =
    camper.gallery && Array.isArray(camper.gallery) ? camper.gallery : [];
  const formattedPrice = camper.price ? camper.price.toFixed(2) : "N/A";

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  // Navigate to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  // Open the modal with the clicked image
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.container}>
      <div className="mainContainer">
        <h1 className={css.title}>{camper.name}</h1>
        <div className={css.info}>
          <span className={css.rating}>
            <svg className={css.iconStar} width="16" height="16">
              <use href={`${snippets}#icon-star`}></use>
            </svg>
            <Link to={`/catalog/${camperId}/reviews`}>
              {camper.rating} ({reviewsCount} Reviews)
            </Link>
          </span>
          <span className={css.location}>
            <svg className={css.iconMap} width="16" height="16">
              <use href={`${snippets}#icon-map`}></use>
            </svg>
            {camper.location}
          </span>
        </div>

        <div className={css.price}>
          <span className={css.priceValue}>€{formattedPrice}</span>
        </div>

        <div className={css.gallery}>
          {gallery.length > 0 &&
            gallery.map((image, index) => (
              <div
                key={index}
                className={css.galleryImgWrap}
                onClick={() => openModal(index)} // Open modal when image is clicked
              >
                <img
                  className={css.galleryImg}
                  src={image.thumb}
                  alt={`Gallery Image ${index + 1}`}
                />
              </div>
            ))}
        </div>

        {/* Modal with sliding images */}
        {isModalOpen && (
          <div className={css.modalBackdrop} onClick={closeModal}>
            <div
              className={css.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={css.prevArrow} onClick={prevImage}>
                &#10094;
              </button>
              <ModalImage
                className={css.modalImage}
                small={gallery[currentImageIndex].thumb}
                large={gallery[currentImageIndex].original}
                alt={`Gallery Image ${currentImageIndex + 1}`}
                hideDownload={true}
              />
              <button className={css.nextArrow} onClick={nextImage}>
                &#10095;
              </button>
            </div>
          </div>
        )}

        <p className={css.description}>{camper.description}</p>

        <nav className={css.nav}>
          <NavLink
            to={`/catalog/${camperId}/features`}
            className={buildLinkClass}
          >
            Features
          </NavLink>
          <NavLink
            to={`/catalog/${camperId}/reviews`}
            className={buildLinkClass}
          >
            Reviews
          </NavLink>
        </nav>

        <div className={css.footer}>
          <div className={css.camperInfo}>
            <Outlet context={{ camper }} />
          </div>

          <div className={css.camperForm}>
            <h2 className={css.formTitle}>Book your campervan now</h2>
            <p className={css.formDescription}>
              Stay connected! We are always ready to help you.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
