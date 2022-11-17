import React from 'react';
import './Mmodal.css'

const Modal = (props) => {

    const {open,close} = props;
    return (
        <div className={open ? 'MopenModal Mmodal' : 'Mmodal'}>
            {open ? (
                <section>
                    <main>{props.children}</main>
                    <footer>
                        <button className="Mclose" onClick={close}>
                            close
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

export default Modal;