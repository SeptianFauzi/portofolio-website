import React, { useEffect, useRef } from "react";
import { FaCode, FaFileAlt, FaTimes, FaUser } from "react-icons/fa";
import Carousel from "./Carousel";
import { IModalContent } from "../../interfaces/modal";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  content: IModalContent;
}
function Modal({ isOpen, onClose, content }: IModal) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToTop = () => {
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
      }
    };
    if (isOpen) {
      scrollToTop();
    }
  }, [isOpen]);

  return (
    <div
      className={`${
        isOpen ? `opacity-100 visible` : `invisible opacity-0`
      } h-screen w-screen bg-gray-700 fixed inset-0 z-20 flex items-center transition-opacity duration-300 ease-in-out dark:bg-gray-400`}
    >
      <div className="lg:mx-auto my-auto flex gap-2 mx-4">
        <div
          className="h-[75vh] max-h-[800px] lg:w-[800px] w-full bg-white rounded-xl shadow-xl lg:p-6 p-4 overflow-auto dark:bg-gray-700"
          ref={modalRef}
        >
          {/* Header */}
          <div className="flex justify-end lg:hidden">
            <FaTimes
              className="text-xl cursor-pointer rounded-full size-11 p-2 mt-1 ml-1 text-black"
              onClick={onClose}
            />
          </div>
          {/* Title */}
          <p className=" text-2xl text-primary text-center mb-6 dark:text-white">
            {content.title}
          </p>
          {/* Body */}
          <div className="flex flex-col gap-6">
            {/* Client Detail */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 self-start">
              <div className="flex flex-col">
                <div className="flex gap-2 lg:items-center justify-start items-start dark:text-slate-400">
                  <FaFileAlt />
                  <p className="text-sm lg:text-base">Project Type:</p>
                  <p className="text-slate-700 text-sm lg:text-base dark:text-slate-400">
                    <strong>{content.category}</strong>
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center justify-start text-sm lg:text-base dark:text-slate-400">
                <FaUser />
                <p className=" text-slate-700 text-sm lg:text-base dark:text-slate-400">
                  Client: <strong>{content.client}</strong>
                </p>
              </div>
              <div className="lg:col-span-2 col-span-1 flex gap-2 items-start justify-start dark:text-slate-400">
                <FaCode className="text-2xl " />
                <p className="text-slate-700 text-sm lg:text-base dark:text-slate-400">
                  Tech Stack:
                  <strong>{` ${content.techStack}`}</strong>
                </p>
              </div>
            </div>
            {/* Description */}
            <p className="dark:text-slate-400">{content.description}</p>
            {/* Carousel */}
            {content?.videoLink && (
              <div className="flex justify-center">
                <video controls height="400" width="300" muted>
                  <source src={content.videoLink} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <Carousel images={content.imageList} />
            {/* Carousel */}

            {/* End Carousel */}
          </div>
        </div>
        <FaTimes
          className="text-xl hidden lg:block cursor-pointer rounded-full border border-white size-11 p-2 mt-1 ml-1 text-white"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default Modal;
