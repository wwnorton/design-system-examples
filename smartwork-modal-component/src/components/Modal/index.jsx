/**
 * Importing component-specific styles like this allows us to use component-scoped
 * styles.
 */

import { Modal as NDSModal } from '@wwnds/react';
import './styles.scss';

// Use this to create a more application-specific version of the NDS Modal if you like
export const Modal = (props) => (
    <NDSModal
        {...props}
    />
);
