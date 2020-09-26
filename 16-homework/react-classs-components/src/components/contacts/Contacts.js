import React, { Component } from 'react';
import Contact from './Contact';

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+3807777777777"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

const searchPlaceholder = "Введіть прізвище контакту";

class Contacts extends Component{

    state = {
        contacts: [...contacts],
        search : '',
    }

    processSearch = (event) =>{
        this.setState({
            search: event.target.value
        })

        this.setState({
            contacts:  [...contacts.filter( record => {
                return (
                    record.lastName.toLowerCase().includes(event.target.value.toLowerCase())
                )
            })]
        })
    }

    render(){
        return (
            <div className="contacts">
                <div className='search-container'>
                    <input className="search-field" value={this.state.search} onChange={this.processSearch} placeholder={searchPlaceholder}/>
                </div>
                {this.state.contacts.map( (contact) => <Contact 
                    firstName={contact.firstName}
                    lastName={contact.lastName}
                    phone={contact.phone}
                />)}
            </div>
        );
    }
}

export default Contacts;