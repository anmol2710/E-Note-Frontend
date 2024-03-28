import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { app } from '../Firebase';
import { collection, getDocs, getFirestore, query, DocumentData } from 'firebase/firestore';
import { AuroraBackground } from '../components/ui/aurora-background'
import { BackgroundGradient } from '../components/ui/background-gradient'
import Navbar from '../components/Navbar';

const db = getFirestore(app);

const Notes = () => {
    const [sub, setSub] = useState<string>('');
    const [notes, setNotes] = useState<DocumentData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const { pageId } = useParams();

    useEffect(() => {
        if (pageId) {
            setSub(pageId);
        }
    }, [pageId]);

    useEffect(() => {
        if (sub) {
            fetchNotes();
        }
    }, [sub]);

    useEffect(() => {
    }, [notes]);

    async function fetchNotes() {
        const docRef = collection(db, sub);
        const q = query(docRef);
        try {
            const docs = await getDocs(q);
            setNotes(docs.docs.map(doc => doc.data()));
            console.log(notes)
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
        setIsLoading(false)
    }

    return (
        <>
            <div className='min-h-screen w-screen flex flex-col items-center justify-center'>
                <AuroraBackground className=' min-h-screen w-screen'>
                    <Navbar />
                    <div className=' mt-[170px] mb-[50px] flex flex-wrap items-center justify-around gap-8 text-white md:mt-100 lg:mt-30 '>
                        {isLoading ?<div><i className="fa-solid fa-spinner fa-spin text-black"></i></div>:
                            notes.length !== 0 ?
                            notes?.map(note => {
                                return (
                                    <div className=' flex items-center justify-center'>
                                        <BackgroundGradient className="min-w-[300px] min-h-[200px] rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                                            <div className=' min-h-[150px] flex flex-col justify-between'>
                                                <p className="text-xl font-semibold text-center sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                                    {note.Name}
                                                </p>
                                                <div className=' flex items-center justify-center gap-4 text-xl '>
                                                    <Link to={note.pdfUrl} target='_blank' className=" p-2 rounded-lg bg-black dark:bg-zinc-700">Notes</Link>
                                                </div>
                                            </div>
                                        </BackgroundGradient>
                                    </div>
                                )
                            })
                            : <>
                                <h1 className=' text-black text-4xl font-semibold text-center'>Notes will be uploaded Soon.</h1>
                            </>
                        }
                    </div>
                </AuroraBackground>
            </div>
        </>
    );
};

export default Notes;
