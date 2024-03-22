import React from 'react';

function List() {
    let items = ['Apple', 'Mango', 'Orange'];
    let detail=[
        {id:1,name:'Rithika'},
        {id:2,name:'Raj'},
        {id:3,name:'Varshini'},
        {id:4,name:'Nila'}
    ];

    let student = [
        {
            name: 'Rithika',
            details: [
                { city: 'Namakkal'},
                { state: 'TamilNadu'}

            ]
        },
        {
            name: 'Divya',
            details: [
                { city: 'Nagpur'},
                { state: 'Uttarkhand'}

            ]
        }
    ];

    const person={
        name:'Rithika',
        email:'rithi@gmail.com'
    };
    return (
        <div>
            <h1>List of fruits</h1>
            <ul>
                {
                    items.map((item,index) => 
                        (<li key={index}>{item}</li>)
                    
                    )
                }

            </ul>

            <ul>
                {
                    detail.map((data,index)=>(
                        <li key={index}>{data.name}</li>

                    ))
                }
            </ul> 

            <div>
                {
                    student.map((data, index) => (
                        <div key={index}>
                            <h1>{data.name}</h1>
                            <div>
                                {data.details.map((detail,index) => (
                                    <p key={index}>
                                        {detail.city}{detail.state}
                                    </p>

                                ))}
                            </div>

                        </div>


                    ))
                }
            </div>

            <div>
                {Object.keys(person).map(key =>(
                    <p key={key}>{person[key]}</p>
                ))}
            </div>



        </div>
    );
}

export { List };

