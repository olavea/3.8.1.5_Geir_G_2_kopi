import React, { Component } from "react"
import { Link, graphql } from "gatsby"

// import buttonBirdyTop from "./LillianUnicornNextPage.png"

export default class arkLayout extends Component {
  render() {
    return (
      <div>
        <h1>u</h1>
      </div>
    )
  }
}
//     const { markdownRemark } = this.props.data
//     const currentPage = markdownRemark.frontmatter.title

//     const prevPage = currentPage - 1 === 0 ? "/" : (currentPage - 1).toString()
//     // const linkToPrevPage = `/bookpage/${prevPage}`

//     var conCurrentPage = Number(currentPage)
//     const nextPage = (conCurrentPage + 1).toString()

//     return (
//       <div>
//         <ul
//           style={{
//             background: `pink`,
//             display: `flex`,
//             flexWrap: `wrap`,
//             justifyContent: `space-between`,
//             listStyle: `none`,
//             padding: 0,
//             margin: 0,
//             marginBottom: 0,
//             paddingBottom: 0,
//           }}
//         >
//           <li>
//             {prevPage && (
//               <Link to={`/${prevPage}`} rel="prev">
//                 ← {prevPage}
//               </Link>
//             )}
//           </li>
//           <li>
//             {nextPage && (
//               <Link to={`/${nextPage}`} rel="next">
//                 {nextPage} →
//               </Link>
//             )}
//           </li>
//         </ul>

//         <div
//           dangerouslySetInnerHTML={{
//             __html: markdownRemark.html,
//           }}
//         />
//         <ul
//           style={{
//             background: `pink`,
//             display: `flex`,
//             flexWrap: `wrap`,
//             justifyContent: `space-between`,
//             listStyle: `none`,
//             padding: 0,
//             margin: 0,
//             marginBottom: 0,
//             paddingBottom: 0,
//           }}
//         >
//           <li>
//             {prevPage && (
//               <Link to={`/${prevPage}`} rel="prev">
//                 ← {prevPage}
//               </Link>
//             )}
//           </li>
//           <li>
//             {nextPage && (
//               <Link to={`/${nextPage}`} rel="next">
//                 <img
//                   style={{
//                     width: "333px",
//                     background: `pink`,
//                   }}
//                   src={buttonBirdyTop}
//                   alt="Unicorn button bottom"
//                 />
//               </Link>
//             )}
//           </li>
//         </ul>
//       </div>
//     )
//   }
// }

// export const BokArkQuery = graphql`
//   query BokArkQuery($slug: String!) {
//     markdownRemark(frontmatter: { title: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         date
//       }
//     }
//   }
// `
