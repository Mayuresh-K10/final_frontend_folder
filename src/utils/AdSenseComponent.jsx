import React, { useEffect } from "react";

const AdSenseComponent = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3919517798801147";
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            {/* Example AdSense ad block */}
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-3919517798801147"
                data-ad-slot="1234567890" // Replace with your actual ad slot ID
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
            <script>
                {`(adsbygoogle = window.adsbygoogle || []).push({});`}
            </script>
        </div>
    );
};

export default AdSenseComponent;
