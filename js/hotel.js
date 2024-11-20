const test = {
    fname: "Nick",
    lname: "Owens",
    age: 100,
    display: function () {
        return fname + " " + this.lname;
    },
};
console.log(test.fname);

const guestGroup = new Array();
$("#submit").click(reservation);

function reservation() {
    const guest = {
        name: $("#name").val(),
        checkIn: $("#checkIn").val(),
        checkOut: $("#checkOut").val(),
        guests: $("#guests").val(),
        roomType: $("#roomType").val(),
    };

    alert(
        guest.name +
            " reserved a " +
            guest.roomType +
            " room from " +
            guest.checkIn +
            " to " +
            guest.checkOut +
            " for " +
            guest.guests +
            " guests."
    );

    guestGroup.push(guest);
}
