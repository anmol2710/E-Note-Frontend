import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { app } from '../Firebase';
import { collection, getDocs, getFirestore, query, DocumentData } from 'firebase/firestore';
import loding from "../assets/page-loading.gif"

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
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
        setIsLoading(false)
    }

    return (
        <>
            <div className="container note-container">
                {!isLoading ?
                    notes.length !== 0 ?
                        notes.map(note => {
                            return (
                                <div className="card bg-slate-700 text-white">
                                    <div className="card-body">
                                        <h3 className="card-title text-2xl">{note.Name}</h3>
                                        <Link to={note.pdfUrl} className="btn btn-primary">Notes</Link>
                                    </div>
                                </div>)
                        })
                        : <>
                            <h1>Notes will be uploaded soon</h1>
                        </>
                    :
                    <>
                        <img src={loding} alt="" />
                    </>}
            </div>
        </>
    );
};

export default Notes;
