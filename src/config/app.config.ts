interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: [],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Patient', 'Insurance Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor Appointment System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage clinics', 'Manage appointments', 'Manage medical records'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/6fde1c61-00d8-402f-9755-0f4eecc627e7',
};
