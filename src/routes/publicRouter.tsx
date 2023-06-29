import {createBrowserRouter, RouteObject} from "react-router-dom";
import {PublicLayout} from "components";
import {
    ErrorPage,
    getPurchases,
    HomePage,
    PurchasePage,
    TestPage,
    UserListPage,
    PurchaseItemPage,
    getPurchaseItem,
    createPurchase,
    deletePurchase,
    updatePurchase
} from "pages";
import PurchaseCreatePage from "../pages/PurchasePage/PurchaseCreatePage/PurchaseCreatePage";
import PurchaseEditPage from "../pages/PurchasePage/PurchaseEditPage/PurchaseEditPage";
import PurchaseErrorPage from "../pages/PurchasePage/PurchaseErrorPage/PurchaseErrorPage";
import PurchaseIndexPage from "../pages/PurchasePage/PurchaseIndexPage/PurchaseIndexPage";
import AuthorizationUsers from "../pages/PurchasePage/AuthorizationUsersPage/AuthorizationUsers";
import RegistrationPage from "../pages/PurchasePage/RegistrationUserPage/RegistrationPage";
import {authorizationUser} from "../pages/PurchasePage/actionPurchases";




const publicRoutes: RouteObject[] =[
    {
        path:"/",
        element: <PublicLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            // {
            //     path:"profiles",
            //     element:<UserListPage/>
            // },
            {
                path:"test",
                element:<TestPage/>
            },
            {
                path:"authorization",
                element:<AuthorizationUsers/>,
                action:authorizationUser
            },
            {
                path:"registration",
                element:<RegistrationPage/>,
            },
            {
                path:"purchases",
                element:<PurchasePage/>,
                loader:getPurchases,
                children:[
                    {
                        errorElement:<PurchaseErrorPage/>,
                        children:[
                            {
                                index:true,
                                element:<PurchaseIndexPage/>
                            },
                            {
                                path:"create",
                                element:<PurchaseCreatePage/>,
                                action:createPurchase,
                            },
                            {
                                path:":purchaseID",
                                element:<PurchaseItemPage/>,
                                loader: getPurchaseItem,
                            },
                            {
                                path:":purchaseID/edit",
                                element:<PurchaseEditPage/>,
                                loader:getPurchaseItem,
                                action:updatePurchase
                            },
                            {
                                path:":purchaseID/delete",
                                action:deletePurchase,
                            },

                        ]
                    }

                ]
            },

        ]
    },
];

export const publicRouter = createBrowserRouter(publicRoutes);