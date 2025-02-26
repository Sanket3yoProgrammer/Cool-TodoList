import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected, darkMode, customColor }) => {
    const tagStyle = {
        HTML: { backgroundColor: "#fda821" },
        CSS: { backgroundColor: "#15d4c8" },
        JavaScript: { backgroundColor: "#ffd12c" },
        React: { backgroundColor: "#4cdafc" },
        default: { backgroundColor: "#f9f9f9" },
        custom: { backgroundColor: customColor || "#f9f9f9" },
    };

    const darkModeStyle = {
        HTML: { backgroundColor: "#fda821" },
        CSS: { backgroundColor: "#15d4c8" },
        JavaScript: { backgroundColor: "#ffd12c" },
        React: { backgroundColor: "#4cdafc" },
        default: { backgroundColor: "#444" },
        custom: { backgroundColor: customColor || "#444" },
    };

    return (
        <button
            type='button'
            className='tag'
            style={selected ? (darkMode ? darkModeStyle[tagName] : tagStyle[tagName]) : (darkMode ? darkModeStyle.default : tagStyle.default)}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

export default Tag;
