import ImmutablePropTypes from 'react-immutable-proptypes';
import React, {Component, PropTypes} from 'react';

class SideMenu extends Component {
	render() {
		const getDisplayName = this._getDisplayName;
		const onClick = this.props.onClick;

		return (
			<div className="side-menu">
				<h3>{this.props.header}</h3>

				<ul className="side-menu-list">
					{this.props.components.toArray().map((item, index) => {
						let className = 'side-menu-list-item';

						return (
							<li
								className={className}
								key={item}
							>
								<a
									data-name={item}
									href="javascript:;"
									onClick={onClick}
								>
									{getDisplayName(item)}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

	_getDisplayName(name) {
		var displayName = name.replace(/-/g, ' ');

		return displayName[0].toUpperCase() + displayName.slice(1, displayName.length);
	}
};

SideMenu.propTypes = {
	components: ImmutablePropTypes.list.isRequired,
	onClick: PropTypes.func.isRequired,
	selectedItem: PropTypes.string
};

export default SideMenu;
