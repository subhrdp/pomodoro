type OptionsType = {
  push: boolean;
  popup: boolean;
  sound: boolean;
  complete: string;
  next: string;
  today: number;
};

async function pushNotification(title: string, body: string) {
  const permission = await Notification.requestPermission();

  if (permission === 'granted') {
    new Notification(title, { body, silent: true });
  }
}

function notifications(options: OptionsType) {
  if (options.push) {
    pushNotification(
      `${options.complete} complete!`,
      `Pomodoros completed today — ${options.today}`
    );
  }

  if (options.popup) {
    window.open(
      `${window.location.href}?notification=true&complete=${options.complete}&next=${options.next}&today=${options.today}`,
      '_blank'
    );
  }

  if (options.sound) {
    new Audio('https://actions.google.com/sounds/v1/cartoon/pop.ogg').play();
  }
}

export default notifications;
