'use client';

import "./filter.css"

export default function Page() {

    const size = Array.from({ length: 100 }, (_, index) => index + 1);

    return (
      <>
      <div>
        <div className="filter-wrapper">
            <div className="option-wrapper ll">
                <p className="filter-option-label">Location</p>
                <select name="selectedLocation" className="options-options locations">
                    <option value="kingston">Kingston</option>
                    <option value="montegobay">Montego Bay</option>
                    <option value="negril">Negril</option>
                    <option value="falmouth">Falmouth</option>
                    <option value="ochorios">Ocho Rios</option>
                    <option value="portmore">Portmore</option>
                </select>
            </div>
            <div className="option-wrapper cl">
                <p className="filter-option-label">Seat Capacity</p>
                <select name="capacity" className="options-options capacity">
                {size.map((size) => (
                    <option key={size} value={size}>{size}</option>
                ))}
                </select>
            </div>
            <div className="option-wrapper al">
                <p className="filter-option-label">Accessible</p>
                <select name="accessible" className="options-options accessible">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <button className="search-button">Search</button>
        </div>
      </div>
      </>
    );
  }
 