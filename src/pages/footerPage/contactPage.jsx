import React, { useEffect, useState } from 'react';
import footerStore from "../../apiRequest/footerApi/footerApi.js";
import FullScreenLoder from "../../components/layout/FullScreenLoder.jsx";
import Layout from "../../components/layout/layout.jsx";
import About from "../../components/footer/about.jsx";

const HowToBuy = () => {
    const {setFooterData } = footerStore();
    const [loader, setLoader] = useState("d-none");

    useEffect(() => {
        (async () => {
            setLoader("");
            await setFooterData("contact");
            setLoader("d-none");
        })()
    }, []);

    return (
        <>
            <Layout>
                <About/>
            </Layout>
            <FullScreenLoder visibility = {loader} />
        </>
    );
};

export default HowToBuy;