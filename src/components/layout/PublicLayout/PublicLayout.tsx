import React from 'react';
import PublicHeader from '../PublicHeader/PublicHeader'
import PublicFooter from "../PublicFooter/PublicFooter";
import {Outlet, useNavigation} from "react-router-dom";
import styles from './index.module.css'
import 'styles/newStyle.css'
import {useTheme} from "../../../hooks/useTheme";
import classNames from "classnames";
// import Spinner from "../Spinner/Spinner";

const PublicLayout = () => {
    // const navigation = useNavigation()
    const theme = useTheme();
    return (
        <div className={classNames(styles.publicLayout,theme)}>
            <div className={styles.positionTop}>
                <PublicHeader/>
            </div>
            <main>
                {/*{*/}
                {/*    navigation.state ==="loading" && <Spinner/>*/}
                {/*}*/}
                <Outlet/>
            </main>
            <div>
                <PublicFooter/>
            </div>

        </div>
    );
};

export default PublicLayout;