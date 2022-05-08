import React from 'react'


const Event = () => {
    var exampleCallback = function() {
        console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '335674299867',
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-335674299867',
        onOrderComplete: exampleCallback
    });


  return (
    <div>
      <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>
      <button id="eventbrite-widget-modal-trigger-335674299867" type="button">Buy Tickets</button>
    </div >
  )
}

export default Event