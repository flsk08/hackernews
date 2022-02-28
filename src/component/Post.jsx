import React from "react";

export default function Post({ id, title, author, url }) {
  return (
    <div className="news-container">
      <table>
        <tbody>
          <tr>
            <td>
              <link to={url}>{title}</link>
            </td>
          </tr>
          <tr>
            <td>by:</td>
            <td>{author}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
