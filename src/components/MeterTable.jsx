import { useContext } from "react";
import { PopupInfoContext } from "../helpers/context";

const MeterTable = () => {
	const { popupInfo } = useContext(PopupInfoContext);

	const {
		fields: {
			creditcard,
			geo_local_area,
			pay_phone,
			r_mf_6p_10,
			r_mf_9a_6p,
			r_sa_6p_10,
			r_sa_9a_6p,
			r_su_6p_10,
			r_su_9a_6p,
			t_mf_6p_10,
			t_mf_9a_6p,
		},
	} = popupInfo;

	return (
		<>
			<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-center text-gray-500">
					<caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-gray-50 ">
						Meter Details
						<p className="mt-1 text-sm font-normal text-gray-500">
							Parking meters are in effect from
							<u>9am to 10pm, 7 days a week</u>, including holidays.
							<a
								href="https://vancouver.ca/streets-transportation/parking.aspx"
								target="_blank"
								rel="noreferrer"
								className="text-blue-500 hover:text-blue-600"
							>
								{" "}
								More info
							</a>
						</p>
					</caption>
					<thead className="text-xs text-gray-700 uppercase bg-gray-100">
						<tr>
							<th scope="col" className="py-3 px-6">
								Neighborhood
							</th>
							<th scope="col" className="py-3 px-6">
								Pay by Phone #
							</th>
							<th scope="col" className="py-3 px-6">
								Credit Card Accepted
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b d">
							<th
								scope="row"
								className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
							>
								{geo_local_area}
							</th>
							<th className="py-4 px-6">{pay_phone}</th>
							<td className="py-4 px-6">
								{creditcard === "Yes" ? (
									<span className="text-green-500">Yes</span>
								) : (
									<span className="text-red-500">No</span>
								)}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-5">
				<table className="w-full text-sm text-center text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-100">
						<tr>
							<th scope="col" className="py-3 px-6">
								Time of Day
							</th>
							<th scope="col" className="py-3 px-6">
								Monday - Friday
							</th>
							<th scope="col" className="py-3 px-6">
								Saturday
							</th>
							<th scope="col" className="py-3 px-6">
								Sunday
							</th>
							<th scope="col" className="py-3 px-6">
								Permitted Parking Duration
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b d">
							<th
								scope="row"
								className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
							>
								9:00 AM - 6:00 PM
							</th>
							<th className="py-4 px-6">{r_mf_9a_6p}</th>
							<td className="py-4 px-6">{r_sa_9a_6p}</td>
							<td className="py-4 px-6">{r_su_9a_6p}</td>
							<td className="py-4 px-6">{t_mf_9a_6p}</td>
						</tr>
						<tr className="bg-white border-b d">
							<th
								scope="row"
								className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
							>
								6:00 PM - 10:00 PM
							</th>
							<th className="py-4 px-6">{r_mf_6p_10}</th>
							<td className="py-4 px-6">{r_sa_6p_10}</td>
							<td className="py-4 px-6">{r_su_6p_10}</td>
							<td className="py-4 px-6">{t_mf_6p_10}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default MeterTable;
