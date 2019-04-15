import { extend } from 'flarum/extend';
import app from 'flarum/app';

import SettingsPage from 'flarum/components/SettingsPage';
import SteamApplication from './components/SteamApplication';
import SteamUnlinkModal from "./components/SteamUnlinkModal";
import SteamLinkModal from "./components/SteamLinkModal";

import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';
import Button from 'flarum/components/Button';

app.initializers.add('flarum-ext-auth-steam', () => {

    extend(SettingsPage.prototype, 'accountItems', (items) => {
        const {
            data: {
                attributes: {
                    SteamAuth: {
                        isLinked = false
                    },
                },
            },
        } = app.session.user;

        items.add('linkSteam',
            Button.component({
                className: `Button SteamButton--${isLinked ? 'danger' : 'success'}`,
                icon: 'fab fa-steam-symbol',
                children: `${isLinked ? 'Unlink' : 'Link'} Steam Account`,  // TODO app.translator.trans(...)
                onclick: () => app.modal.show(isLinked ? new SteamUnlinkModal() : new SteamLinkModal())
            })
        );
    });

    extend(LogInButtons.prototype, 'items', (items) => {
        items.add('steam',
            <LogInButton
                className="Button LogInButton--steam"
                icon="fab fa-steam-symbol"
                path="/auth/steam">
                {app.translator.trans('flarum-ext-auth-steam.forum.log_in.with_steam_button')}
            </LogInButton>
        );
    });
});

app.steam = new SteamApplication();