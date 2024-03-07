import React, { useState } from 'react';
import './item.css';
import {ReactComponent as FileHead} from '../head.svg';
import {ReactComponent as Downlload} from '../download.svg';
import Pdff from '../media/pdf.png';
import Xll from '../media/xls.png';
import ModalForm from '../ModalForm/ModalForm';

const Itemm = ()=>{

    const relload = ()=> window.location.reload();

    const [from, setFrom] = useState(false);
    const showFromModal = ()=>{
        setFrom(true);
    };

    const hideFromModal = ()=>{
        setFrom(false);
    };

    return(<>

        { from ? <ModalForm hideFromModal={hideFromModal} /> : null }

        <div className='files__container_'>
            <div className='files__header__'>
                <FileHead className='mod_log'/>
                <h2 className='five'>5 items ready for download</h2>
                <p className='expa_'>44.0 MB • Expires in 7 days</p>
            </div>

            <hr className='hhrr'/>


            <div className='files__body__'>


                <section className='wrp__'>
                    <article className='files__cntnt___'>
                        <img 
                            alt='pdf'
                            className='portable___document__file_'
                            src={Pdff}
                        />

                        <div className='txt__cntnt__'>
                            <span className='subj___ct'>Drawings.pdf</span>
                            <br />
                            <span className='file_siz'>20 MB</span>
                        </div>
                    </article>

                    <article className='dnld__symb__'>
                        <Downlload 
                            className='donldddd__vg_'
                            title='Download'
                            onClick={showFromModal}
                        />
                    </article>
                </section>


                <section className='wrp__'>
                    <article className='files__cntnt___'>
                        <img 
                            alt='pdf'
                            className='portable___document__file_'
                            src={Xll}
                        />

                        <div className='txt__cntnt__'>
                            <span className='subj___ct'>Specifications.xlsx</span>
                            <br />
                            <span className='file_siz'>4.5 MB</span>
                        </div>
                    </article>

                    <article className='dnld__symb__'>
                        <Downlload 
                            className='donldddd__vg_'
                            title='Download'
                            onClick={showFromModal}
                        />
                    </article>
                </section>





                <section className='wrp__'>
                    <article className='files__cntnt___'>
                        <img 
                            alt='pdf'
                            className='portable___document__file_'
                            src={Pdff}
                        />

                        <div className='txt__cntnt__'>
                            <span className='subj___ct'>Assembly Documents.pdf</span>
                            <br />
                            <span className='file_siz'>10.5 MB</span>
                        </div>
                    </article>

                    <article className='dnld__symb__'>
                        <Downlload 
                            className='donldddd__vg_'
                            title='Download'
                            onClick={showFromModal}
                        />
                    </article>
                </section>



                <section className='wrp__'>
                    <article className='files__cntnt___'>
                        <img 
                            alt='pdf'
                            className='portable___document__file_'
                            src={Xll}
                        />

                        <div className='txt__cntnt__'>
                            <span className='subj___ct'>Bill of Materials.xlsx</span>
                            <br />
                            <span className='file_siz'>5 MB</span>
                        </div>
                    </article>

                    <article className='dnld__symb__'>
                        <Downlload 
                            className='donldddd__vg_'
                            title='Download'
                            onClick={showFromModal}
                        />
                    </article>
                </section>





                <section className='wrp__'>
                    <article className='files__cntnt___'>
                        <img 
                            alt='pdf'
                            className='portable___document__file_'
                            src={Xll}
                        />

                        <div className='txt__cntnt__'>
                            <span className='subj___ct'>Acknowledgment.pdf</span>
                            <br />
                            <span className='file_siz'>4 MB</span>
                        </div>
                    </article>

                    <article className='dnld__symb__'>
                        <Downlload 
                            className='donldddd__vg_'
                            title='Download'
                            onClick={showFromModal}
                        />
                    </article>
                </section>


            </div>


            <hr />





            <div className='files__footer__'>
                <p className='sacld' onClick={relload}>Save to cloud</p>

                <div>
                    <button className='btnnnnnn' onClick={showFromModal}>Download All</button>
                </div>
            </div>


        </div>
    </>)
};

export default Itemm;