import React from "react";

export default function Post({ objectID, title, author, url }) {
  return (
    <div className="news-container" style={{ backgroundColor: "beige" }}>
      <table>
        <tbody>
          <tr className="title">
            <td>
              <a style={{ textDecoration: "none" }} href={url}>
                {title}
              </a>
            </td>
          </tr>
          <tr className="author">
            <td>by: {author}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
