import React from 'react';
import Base from '../components/base';

export default class Post extends Base {

	render(){
		return (
				<div>{this.props.children}</div>
			);
	}
}