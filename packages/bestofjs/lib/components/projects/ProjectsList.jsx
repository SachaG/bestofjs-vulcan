/* 

List of movies. 
Wrapped with the "withList" and "withCurrentUser" containers.

*/

import React from 'react';
import Helmet from 'react-helmet';
import { Components, withCurrentUser, registerComponent } from 'meteor/vulcan:core';

import Projects from '../../modules/projects/collection.js';
import Stories from '../../modules/stories/collection.js';

const ProjectsList = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
  <div style={{maxWidth: '500px', margin: '20px auto'}}>

    <Helmet>
      <link name="bootstrap" rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css"/>
    </Helmet>

    {/* user accounts */}

    <div style={{padding: '20px 0', marginBottom: '20px', borderBottom: '1px solid #ccc'}}>
    
      <Components.AccountsLoginForm />
    
    </div>

    {Stories.options.mutations.new.check(currentUser) ?
      <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #ccc'}}>
        <h4>Insert New Story</h4>
        <Components.SmartForm collection={Stories} /> 
      </div> :
      null
    }

    {loading ? 

      <Components.Loading /> :

      <div className="projects">
        
        <Components.Datatable 
          collection={Stories} 
          columns={[
            'createdAt',
            'body',
          ]}
        />

        {/*
        <Components.Datatable 
          collection={Projects} 
          showEdit={false} 
          showSearch={false}
          columns={[
            'name',
            'fullName',
            'description',
            'stargazers',
          ]}
          options={{
            fragmentName: 'ProjectsFragment'
          }}
        />
      */}

      </div>
    }

  </div>

registerComponent('ProjectsList', ProjectsList, withCurrentUser);
