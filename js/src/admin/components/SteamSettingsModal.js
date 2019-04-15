import SettingsModal from 'flarum/components/SettingsModal';

// TODO change trans key ...
export default class SteamSettingsModal extends SettingsModal {
    className() {
        return 'AuthSteamSettingsModal Modal--small';
    }

    title() {
        return app.translator.trans('flarum-ext-auth-steam.admin.steam_settings.title');
    }

    form() {
        return [
            <div className="Form-group">
                <label>{app.translator.trans('flarum-ext-auth-steam.admin.steam_settings.api_key_label')}</label>
                <input className="FormControl" bidi={this.setting('flarum-ext-auth-steam.api_key')}/>
            </div>,
        ];
    }
}