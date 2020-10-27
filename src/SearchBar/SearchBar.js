import React from 'react';
import styles from './SearchBar.module.css';

export function SearchBar(props) {

    const sizeClass = props.small ? '' : 'is-medium'
    return (
        <form>
            <div className={styles.wrapper}>
                <p className="control">
                    <input className={`input ${styles['input-control']}`}
                        //onChange={(e) => setTerm(e.target.value)} /* onChange is everytime somthing changes (every keystroke) | on this occasion Every keystroke updates the "term" with setTerm */
                        type='text'
                        value=''
                        placeholder="Input your City, State, Zip.."
                    />
                </p>
                <button className={`button is-static ${sizeClass} ${styles['search-button']}`}>
                    <span><i className="fas fa-search fa-2x"></i></span>
                </button>
            </div>

        </form>
    )
}