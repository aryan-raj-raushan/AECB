import { factories } from "@strapi/strapi";
import { generateOTP, sendMessage, sendWhatsappMessage } from "./notifier/services";
import { logger } from "../../../../config/logger";

export default factories.createCoreController(
	"api::user-data.user-data",
	({ strapi }) => ({

		async create(ctx) {
			try {
				const response = await super.create(ctx);
				const number = response.data.attributes.number;
				const otpToSend = generateOTP();

				// Update the user data with the generated OTP
				await strapi.query('api::user-data.user-data').update({
					where: { id: response.data.id },
					data: {
						otp: otpToSend,
					}
				});

				// Send OTP via WhatsApp and SMS
				await Promise.all([
					sendWhatsappMessage(number, otpToSend),
					sendMessage(number, otpToSend)
				]);

				return response;
			} catch (error) {
				logger.error('Error in sending signup OTP:', error);
				throw new Error('Failed to send OTP');
			}
		},

		async update(ctx) {
			try {
				const response = await super.update(ctx);
				const number = response.data.attributes.number;
				const otpToSend = generateOTP();

				// Update the user data with the generated OTP
				await strapi.query('api::user-data.user-data').update({
					where: { id: response.data.id },
					data: {
						otp: otpToSend,
					}
				});

				// Send OTP via WhatsApp and SMS
				await Promise.all([
					sendWhatsappMessage(number, otpToSend),
					sendMessage(number, otpToSend)
				]);

				return response;
			} catch (error) {
				logger.error('Error in sending signin OTP:', error);
				throw new Error('Failed to send OTP');
			}
		}
	})
);

