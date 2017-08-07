var events = [
    {
        date: "December 14, 1895",
        event: "Albert Frederick Arthur George was born to King Edward VIII and Mary of Teck at York Cottage."
    },
    {
        date: "January 22, 1901",
        event: "Great-grandmother, Queen Victoria died."
    },
    {
        date: "1909",
        event: "Began attendance at the Royal Naval College."
    },
    {
        date: "May 10, 1910",
        event: "Grandfather, King Edward VII passed away. Father ascended the throne as King George V."
    },
    {
        date: "August 4, 1914",
        event: "Britain declared war on Germany, marking Britain's entrance into World War I."
    },
    {
        date: "September 9, 1919",
        event: "The peace Treaty of St Germain-en-Laye was signed between the Allies and Austria, marking the end of World War I."
    },
    {
        date: "April 26, 1923",
        event: "Wed to Lady Elizabeth Bowles-Leon in Westminester Abbey."
    },
    {
        date: "November 1925",
        event: "Began to see Lionel Logue, a speech therapist from Austailia."
    },
    {
        date: "April 21, 1926",
        event: "Daughter, Elizabeth Alexandra Mary, was born."
    },
    {
        date: "August 21, 1930",
        event: "Daughter, Margaret Rose, was born."
    },
    {
        date: "January 20, 1936",
        event: "Father, King George V, died. Brother ascended the throne as Edward VIII."
    },
    {
        date: "December 11, 1936",
        event: "Edward VIII abdicated the thrown to marry Wallis Simpson."
    },
    {
        date: "May 12, 1937",
        event: "Coronated King George VI."
    },
    {
        date: "September 30, 1938",
        event: "Munich Agreement was signed."
    },
    {
        date: "September 1, 1939",
        event: "Britain declares war on Nazi Germany."
    },
    {
        date: "May 8, 1945",
        event: "Germany surrenders to the allied forces. World War II is over."
    },
    {
        date: "January, 1946",
        event: "United Nations meets for the first time."
    },
    {
        date: "August 14, 1947",
        event: "India wins its independance from Britain."
    },
    {
        date: "November 20, 1947",
        event: "Daughter, Elizabeth, marriges Prince Phillip Montbatten."
    },
    {
        date: "February 6, 1952",
        event: "Found dead at Sandringham House. Cause of death was a coronary thrombosis."
    }
];

var eventSource = $("#event-template").html();
var eventTemplate = Handlebars.compile(eventSource);

for(var i = 0; i < events.length; i++){
    $("#timeline").append(eventTemplate(events[i]));
}
