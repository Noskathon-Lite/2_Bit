import React from 'react';

interface MapLinkProps {
    longitude: string;
    latitude: string;
}

const MapLink: React.FC<MapLinkProps> = ({ longitude ='27.6692992',latitude='85.3409792' }) => {
    const generateMapUrl = (longitude: string, latitude: string): string => {
        return `https://www.google.com/maps/@${latitude},${longitude},21z/data=!4m6!3m5!1s0x39eb19e8af4a5fe3:0x963d00cdf478c6b6!8m2!3d27.6713817!4d85.3387383!16s%2Fm%2F0hr0sch`;
    };

    return (
        <a href={generateMapUrl(longitude, latitude)} target="_blank" rel="noopener noreferrer">
            View on Map
        </a>
    );
};

export default MapLink;