import React from "react";

// import { Link, graphql, useStaticQuery } from "gatsby";

// import footerStyles from "./footer.module.scss";

// const Footer = () => {
// //   const data = useStaticQuery(graphql`
// //     query {
// //       site {
// //         siteMetadata {
// //           author
// //         }
// //       }
// //     }
// //   `);

//   return (
//     <div className="site-footer">
//       <h4 className="text-center">blog</h4>
//       <p className="text-center">Find me on these SocialMedia</p>
//       <div className="footer-social-links">
//         <ul className="social-links-list">
//           <li>
//             <a
//               href="https://www.facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="facebook"
//             >
//               <i class="fab fa-facebook-f fa-2x"></i>
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://www.facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="twitter"
//             >
//               <i class="fab fa-twitter fa-2x"></i>
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://www.facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="Instagram"
//             >
//               <i class="fab fa-instagram fa-2x"></i>
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://www.facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="linkedin"
//             >
//               <i class="fab fa-linkedin fa-2x"></i>
//             </a>
//           </li>
//         </ul>
//       </div>
//       {/* <footer className={footerStyles.footer}> */}
//       {/* <p>Find me on these Social Media</p> */}
 
//       {/* <p>Created by {data.site.siteMetadata.author}, © 2020</p>
//             </footer> */}
//     </div>
//   );
// };

const Footer = () => (
    <div className="site-footer">
        <h4 className="text-center">blog</h4>
        <p className="text-center">Find me on these SocialMedia</p>
        <div className="footer-social-links">
            <ul className="social-links-list">
            <li>
                <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
                >
                <i class="fab fa-facebook-f fa-2x"></i>
                </a>
            </li>
            <li>
                <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter"
                >
                <i class="fab fa-twitter fa-2x"></i>
                </a>
            </li>
            <li>
                <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="Instagram"
                >
                <i class="fab fa-instagram fa-2x"></i>
                </a>
            </li>
            <li>
                <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
                >
                <i class="fab fa-linkedin fa-2x"></i>
                </a>
            </li>
            </ul>
        </div>
    </div>
)
export default Footer
