import React from "react";

export default function Post({
  title,
  author,
  url,
  numOfComments,
  points,
}) {
  return (
    <div className="news-container">
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
            <td>
              by: {author} | points: {points} | comments: {numOfComments}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
