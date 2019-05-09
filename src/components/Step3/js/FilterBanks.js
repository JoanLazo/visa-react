import React, { Component } from 'react';

class FilterBanks extends Component {
    render() {
        return(
            <div className="Filtros">
            <select>
                <option value="12">12 MESES</option>
                <option value="24">24 MESES</option>
                <option value="36">36 MESES</option>
            </select>
            </div>
        )
    }
}