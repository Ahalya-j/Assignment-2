({
  onInit: function (component, event, helper) {
    component.set('v.notifications', [
      { time: '23/06/2020', message: 'Product is Dispatched!' },
      { time: '24/06/2020', message: 'Sorry your ordered products has been Delayed will be delivered by 27/06/2020.' },
      { time: '26/06/2020', message: ' Expected Date ' },
      { time: '27/06/2020', message: 'Delivered' }
    ]);
    helper.displayToast(component, 'success', 'Ready to receive notifications.');
  },
  onClear: function (component, event, helper) {
    component.set('v.notifications', []);
  },
  onToggleMute: function (component, event, helper) {
    const isMuted = component.get('v.isMuted');
    component.set('v.isMuted', !isMuted);
    helper.displayToast(component, 'success', 'Notifications ' + ((!isMuted) ? 'muted' : 'unmuted') + '.');
  }
})
