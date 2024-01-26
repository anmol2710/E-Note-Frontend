import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { app } from '../Firebase';
import { collection, getDocs, getFirestore, query, DocumentData } from 'firebase/firestore';

const db = getFirestore(app);

const Notes = () => {
    const [sub, setSub] = useState<string>('');
    const [notes, setNotes] = useState<DocumentData[]>([]);

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
    }

    return (
        <>
            <div className="container note-container">
                {notes.length !== 0 ?
                    notes.map(note => {
                        return (
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">{note.Name}</h3>
                                    <Link to={note.pdfUrl} className="btn btn-primary">Notes</Link>
                                </div>
                            </div>)
                    })
                    : <>
                        <h1>Notes will be uploaded soon</h1>
                    </>}
            </div>
        </>
    );
};

export default Notes;
