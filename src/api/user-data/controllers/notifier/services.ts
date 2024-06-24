import { logger } from "../../../../../config/logger";
import { NOTIFIER_URL } from "../../../../constants/const"

export function generateOTP() {
	const digits = "0123456789";
	let makeOtp = "";
	for (let i = 0; i < 6; i++) {
		makeOtp += digits[Math.floor(Math.random() * 10)];
	}

	return makeOtp;
}

export const sendWhatsappMessage = async (phoneNumber: string, otp: string) => {
	const url = `${NOTIFIER_URL}/send_whatsapp`;
	const data = {
		phone_number: phoneNumber,
		otp: otp,
	};

	try {
		await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'accept': 'application/json'
			},
			body: JSON.stringify(data)
		});

		// const responseData = response.json();
		// logger.info('Otp Response for Whatsapp OTP: ')
		// return response;
	} catch (error) {
		logger.error('Error in sending Whatsapp OTP: ', error)
		throw new Error('Failed to send OTP');
	}
};

export const sendMessage = async (phoneNumber: string, otp: string) => {
	const url = `${NOTIFIER_URL}/send_sms`;
	const data = {
		phone_number: phoneNumber,
		otp: otp,
	};

	try {
		await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'accept': 'application/json'
			},
			body: JSON.stringify(data)
		});

		//const responseData = response.json();
		// logger.info('Otp Response for Whatsapp OTP: ', response)
		// return response;
	} catch (error) {
		logger.error('Error in sending SMS OTP: ', error)
		throw new Error('Failed to send OTP');
	}
};