import React, { Fragment } from "react";

const Paginacion = ({ prev, next, onPrevious, onNext }) => {

    const handlePrevious = () => {
        onPrevious();
    }
    const handleNext = () => {
        onNext();
    }


    return (
        <Fragment>
            <nav className="my-5">
                <ul className="pagination justify-content-center">
                    {prev ?
                        <li className="page-item">
                            <button className="page-link" onClick={handlePrevious}>
                                Previus
                            </button>
                        </li>
                        :
                        null
                    }
                    {
                        next ?

                            <li className="page-item">
                                <button className="page-link" onClick={handleNext}>
                                    next
                                </button>
                            </li>
                            :
                            null
                    }
                </ul>
            </nav>
        </Fragment>
    );
}

export default Paginacion;