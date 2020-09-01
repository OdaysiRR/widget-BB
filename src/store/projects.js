import { fetchWidget, fetchTimeSlots } from "../http/api";

export const CHANGE_RESERVE = "reserve/change";

const INITIAL_WIDGET = {
  id: null,
  bowlingcenterId: null,
  language: "en",
  bookingStyle: "book-by-minute",
  dateFormat: "MM.DD.YYYY",
  timeFormat: "hh:mm A",
  timeZone: "Europe/Stockholm",
  apiToken: null,
  bowlingcenter: {
    id: null,
    name: "",
    lanes: 1,
  },
  customerGroups: [{ amount: 2 }],
  bookableTypes: [],
};



export function widget(store) {
  store.on("@init", () => ({ data: INITIAL_WIDGET }));

  

  store.on("get/widget", ({ data },id) => {
    return fetchWidget(id)
      .then((res) => {
        
        console.log(res.data)
        const result = {...data};
        result.bowlingcenter.name= res.data.bowlingcenter.name;
        result.bowlingcenterId=res.data.bowlingcenterId;
        return{
          data: result
        }
      })
      .catch((err) => ({ errors: err, loading: false }));
  });

  store.on("save/TimeSlotsParams", ({ widget, data }) => {
    return {
      timeSlotsParams: data,
    };
  });

  store.on("set/TimeSlotsState", ({ widget, data }) => {
    return {
      timeSlotsState: data, errors: '' 
    };
  });

  store.on("get/TimeSlots", ({ widget }) => {
    return fetchTimeSlots(widget.widget.apiToken, widget.timeSlotsParams)
      .then((res) => ({
        availableTimeSlots: res.data,
        errors: "",
        loading: false,
      }))
      .catch((err) => ({ errors: err, loading: false }));
  });
}

/*export function typeReserve(store) {
  const initialState = { label: "Bowling", id: "bowling" };

  store.on("@init", () => ({ reserveSelected: initialState }));

  store.on(CHANGE_RESERVE, ({ reserveSelected }, selected) => {
    console.log(selected);
    return { reserveSelected: selected };
  });
}*/
