import React from 'react'
import TemplateEntry from '../../components/TemplateEntry/TemplateEntry.component';

const TemplateListContainer = () => {

    const renderTemplateList = () =>[1,2,3,4]
    .map(id => <TemplateEntry
          onClick={() =>{
            this.props.history.push(`/templates/${id}`);
            console.log('object')
          }}
          key={id}
        />)

    return (
        <div>
            <h1>
                All Templates
            </h1>
            <div>
                {renderTemplateList()}
            </div>
        </div>
    )
}

export default TemplateListContainer
