import React from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['firstName', 'lastName'];

const AlternateMountPointForm = props => {
  const {
    fields: {firstName, lastName},
    handleSubmit,
    resetForm
  } = props;
  return (<form className="form-horizontal" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="col-xs-4 control-label">First Name</label>
        <div className="col-xs-8">
          <input type="text" className="form-control" placeholder="First Name" {...firstName}/>
        </div>
      </div>
      <div className="form-group">
        <label className="col-xs-4 control-label">Last Name</label>
        <div className="col-xs-8">
          <input type="text" className="form-control" placeholder="Last Name" {...lastName}/>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary btn-lg" style={{margin: 10}} onClick={handleSubmit}>Submit</button>
        <button className="btn btn-default btn-lg" style={{margin: 10}} onClick={resetForm}>Clear Values</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'alternateMountPoint',
  fields,
  reduxMountPoint: 'alternate'  // <-------- alternate mount point specified
})(AlternateMountPointForm);