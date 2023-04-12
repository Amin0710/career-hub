import React from "react";
import "./Footer.css";
import fb from "../../assets/Logo/fb.png";
import In from "../../assets/Logo/In.png";
import tw from "../../assets/Logo/tw.png";

const Footer = () => {
	return (
		<footer>
			<div id="footer-content">
				<div id="footer-content-top">
					<div>
						<p className="columHead logo">CareerHub</p>
						<p>
							There are many variations of passages of Lorem Ipsum , but the
							majority have suffered alteration in some form.
						</p>
						<img src={fb} alt="Image 1" />
						<img src={In} alt="Image 2" />
						<img src={tw} alt="Image 3" />
					</div>
					<div>
						<p className="columHead">Company</p>
						<p>About Us</p>
						<p>Work</p>
						<p>Latest News</p>
						<p>Careers</p>
					</div>
					<div>
						<p className="columHead">Column 3</p>
						<p>List Item 1</p>
						<p>List Item 2</p>
						<p>List Item 3</p>
						<p>List Item 4</p>
					</div>
					<div>
						<p className="columHead">Column 4</p>
						<p>List Item 1</p>
						<p>List Item 2</p>
						<p>List Item 3</p>
						<p>List Item 4</p>
					</div>
					<div>
						<p className="columHead">Column 5</p>
						<p>List Item 1</p>
						<p>List Item 2</p>
						<p>List Item 3</p>
						<p>List Item 4</p>
					</div>
				</div>
				<hr
					style={{
						border: "1px solid #ffffffb2",
						width: "100%",
						margin: "30px 0",
					}}></hr>
				<div id="footer-content-bottom">
					<p>
						@2023 <span className="bold">CareerHub</span>. All Rights Reserved
					</p>
					<p>
						Powered by <span className="bold">CareerHub</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
