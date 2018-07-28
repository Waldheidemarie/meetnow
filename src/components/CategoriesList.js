import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFlask,
        faBuilding,
        faMusic,
        faVolleyballBall,
        faTshirt,
        faLifeRing,
        faPeopleCarry,
        faBriefcaseMedical,
        faWrench,
        faSearch,
        faList,
        faUserFriends
} from '@fortawesome/free-solid-svg-icons';

const CategoriesList = () => {
    return (
        <div className="m-categories">
            <h4>Categories ...</h4>
            <hr />
            <ul>
                <li><FontAwesomeIcon icon={faFlask}/> Science & Tech</li>
                <li><FontAwesomeIcon icon={faBuilding}/> Business</li>
                <li><FontAwesomeIcon icon={faMusic}/> Entertainment</li>
                <li><FontAwesomeIcon icon={faVolleyballBall}/> Sports</li>
                <li><FontAwesomeIcon icon={faTshirt}/> Fashion</li>
                <li><FontAwesomeIcon icon={faLifeRing}/> Lifestyle</li>
                <li><FontAwesomeIcon icon={faPeopleCarry}/> Volunteering</li>
                <li><FontAwesomeIcon icon={faUserFriends}/> Age Groups</li>
                <li><FontAwesomeIcon icon={faBriefcaseMedical}/> Health</li>
                <li><FontAwesomeIcon icon={faWrench}/> Career Fairs</li>
                <li><FontAwesomeIcon icon={faSearch}/> Research Groups</li>
                <li><FontAwesomeIcon icon={faList}/> Conferences</li>
            </ul>
        </div>
    )
}

export default CategoriesList;