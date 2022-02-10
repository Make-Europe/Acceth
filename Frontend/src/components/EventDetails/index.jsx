import React from "react";
import ChainBanner from "../ChainBanner";
import "./EventDetails.css";

function EventDetails(props) {
  const {
    details_Titel,
    detailspanel_Host_Titel,
    detailspanel_Host_Text,
    detailspanel_Date_Titel,
    detailspanel_Date_Text,
    detailspanel_Start_Titel,
    detailspanel_Start_Text,
    detailspanel_End_Titel,
    detailspanel_End_Text,
    detailspanel_Location_Titel,
    detailspanel_Location_Text,
    detailspanel_City_Titel,
    detailspanel_City_Ziptext,
    detailspanel_City_Text1,
    detailspanel_Street_Titel,
    detailspanel_City_Text2,
    lineuppanel_Titel,
    lineuppanel_Text,
    informationpanel_Titel,
    informationpanel_Text,
    buyticket_Text,
    ticketpanel_Category_Titel,
    ticketpanel_Category_Text,
    ticketpanel_Capacity_Titel,
    ticketpanel_Capacity_Current_Text,
    ticketpanel_Capacity_Total_Text,
    ticketpanel_Expiry_Titel,
    ticketpanel_Expiry_Text,
    ticketpanel_Price_Titel,
    ticketpanel_Price_Text,
    details_picture
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="eventdetails screen">
        <ChainBanner />
        <div className="details_-titel montserrat-semi-bold-black-50px">{details_Titel}</div>
        <div className="detail-informations">
          <img className="details_-picture" src={details_picture} />
          <div className="details-panel-1 border-1px-dove-gray">
            <div className="detailspanel_host_t-container">
              <div className="details-panel_-host_-titel montserrat-medium-black-25px">{detailspanel_Host_Titel}</div>
              <div className="details-panel montserrat-normal-black-25px">{detailspanel_Host_Text}</div>
            </div>
            <div className="detailspanel_date_t-container">
              <div className="details-panel_-date_-titel montserrat-medium-black-25px">{detailspanel_Date_Titel}</div>
              <div className="details-panel montserrat-normal-black-25px">{detailspanel_Date_Text}</div>
            </div>
            <div className="detailspanel_start_t-container">
              <div className="details-panel_-start_-titel montserrat-medium-black-25px">{detailspanel_Start_Titel}</div>
              <div className="details-panel montserrat-normal-black-25px">{detailspanel_Start_Text}</div>
            </div>
            <div className="detailspanel_end_t-container">
              <div className="details-panel_-end_-titel montserrat-medium-black-25px">{detailspanel_End_Titel}</div>
              <div className="details-panel montserrat-normal-black-25px">{detailspanel_End_Text}</div>
            </div>
            <div className="detailspanel_location_t-container">
              <div className="details-panel_-location_-titel montserrat-medium-black-25px">
                {detailspanel_Location_Titel}
              </div>
              <div className="details-panel_-location_-text montserrat-normal-black-25px">
                {detailspanel_Location_Text}
              </div>
            </div>
            <div className="detailspanel_city_-container">
              <div className="details-panel_-city_-titel montserrat-medium-black-25px">{detailspanel_City_Titel}</div>
              <div className="details-panel_-city_-zip-text montserrat-normal-black-25px">
                {detailspanel_City_Ziptext}
              </div>
              <div className="x-panel montserrat-normal-black-25px">{detailspanel_City_Text1}</div>
            </div>
            <div className="detailspanel_-container">
              <div className="details-panel_-street_-titel montserrat-medium-black-25px">
                {detailspanel_Street_Titel}
              </div>
              <div className="details-panel montserrat-normal-black-25px">{detailspanel_City_Text2}</div>
            </div>
          </div>
        </div>
        <div className="lineup-panel2 border-1px-dove-gray">
          <div className="lineup-panel_-titel2 montserrat-medium-black-25px">{lineuppanel_Titel}</div>
          <div className="lineup-panel_-text2 montserrat-normal-black-25px">{lineuppanel_Text}</div>
        </div>
        <div className="information-panel2 border-1px-dove-gray">
          <div className="information-panel_-titel2 montserrat-medium-black-25px">{informationpanel_Titel}</div>
          <div className="information-panel_-text2 montserrat-normal-black-25px">{informationpanel_Text}</div>
        </div>
        <div className="buy-ticket-panel">
          <div className="ticket-container">
            <div className="buy-ticket border-1px-dove-gray">
              <div className="buyticket_-text montserrat-medium-black-30px">{buyticket_Text}</div>
            </div>
            <div className="ticket-panel border-1px-dove-gray">
              <div className="ticketpanel_ca-container">
                <div className="ticket-panel_-category_-titel montserrat-medium-black-25px">
                  {ticketpanel_Category_Titel}
                </div>
                <div className="ticket-panel_-category_-text montserrat-normal-black-25px">
                  {ticketpanel_Category_Text}
                </div>
                <div className="ticket-panel_-capacity_-titel montserrat-medium-black-25px">
                  {ticketpanel_Capacity_Titel}
                </div>
                <div className="ticket-panel_-capacity_-current_-text montserrat-normal-black-25px">
                  {ticketpanel_Capacity_Current_Text}
                </div>
                <div className="ticket-panel_-capacity_-total_-text montserrat-normal-black-25px">
                  {ticketpanel_Capacity_Total_Text}
                </div>
              </div>
              <div className="ticketpanel_-container">
                <div className="ticket-panel_-expiry_-titel montserrat-medium-black-25px">
                  {ticketpanel_Expiry_Titel}
                </div>
                <div className="ticket-panel_-expiry_-text montserrat-normal-black-25px">{ticketpanel_Expiry_Text}</div>
                <div className="ticket-panel_-price_-titel montserrat-medium-black-25px">{ticketpanel_Price_Titel}</div>
                <div className="x-panel montserrat-normal-black-25px">{ticketpanel_Price_Text}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
