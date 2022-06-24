import './CafeContact.css';

function CafeContact({ cafe }) {
	if (!cafe.phone) {
		return (
			<section>
				<h6>
					<strong>Contact</strong>
				</h6>
				<p>
					<em>No phone number available.</em>
				</p>
			</section>
		);
	} else {
		return (
			<section>
				<h6>
					<strong>Contact</strong>
				</h6>
				<p>{cafe.display_phone}</p>
				<a href={`tel:${cafe.phone}`} className='call-link'>
					Call 📞
				</a>
			</section>
		);
	}
}

export default CafeContact;
