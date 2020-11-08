import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '@servicenow/now-template-card';
import { mockData } from './mockData';

const view = state => {
	return (	
		<div className="container">
			{state.items.map(i => {
				return <now-template-card-assist
					tagline={i.tagline}
					actions={i.actions}
					heading={i.heading}
					content={i.content}
					footer-content={i.footerContent}
				/>})
			}
		</div> 
	);
};

createCustomElement('x-550136-card-list', {
	renderer: {type: snabbdom},
	initialState: { 
		items: [] 
	},
	view,
	styles,
	transformState(state) {
        return {
            ...state,
            items: mockData
        };
    }
});