import { SFDXCommand } from '@flxbl-io/sfdx-process-wrapper/lib/SFDXCommand';
import { Logger, LoggerLevel } from '@flxbl-io/sfp-logger';

export default class SFDMURunImpl extends SFDXCommand {
    public constructor(
        working_directory: string,
        target_org: string,
        private targetOrgDomain: string,
        private packageDirectory: string,
        logger: Logger,
        logLevel: LoggerLevel
    ) {
        super(target_org, working_directory, logger, logLevel);
    }

    getSFDXCommand(): string {
        return 'sf sfdmu run';
    }
    getCommandName(): string {
        return 'sfdmu run';
    }

    getGeneratedParams(): string {
        let command = `--path ${this.packageDirectory} -s csvfile -u ${this.target_org} --noprompt --canmodify ${this.targetOrgDomain}`;
        if (this.logLevel) command += ` --loglevel ${LoggerLevel[this.logLevel]}`;
        return command;
    }
}
