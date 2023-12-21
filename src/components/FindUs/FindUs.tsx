import React from 'react';

const FindUs = () => {
	return (
		<div style={{ margin: '0 5%' }}>
			<h1>Find us</h1>
			<p>Come to our super shop and experience our service.</p>
			<div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.7611328158029!2d91.47843214776044!3d22.76372860850477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375349b5bbaf7d79%3A0x6694e0abc5383e2e!2z4Kat4Ka-4KaHIOCmreCmvuCmhyDgprjgp4Hgpqrgpr7gprDgpq7gpr7gprDgp43gppXgp4fgpp8!5e0!3m2!1sen!2sbd!4v1703130916478!5m2!1sen!2sbd"
					width="100%"
					height="300"
					style={{ border: '0', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	);
};

export default FindUs;
