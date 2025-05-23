import { Button } from '@grafana/ui';
import { Trans } from 'app/core/internationalization';

import { DataSourceRights } from '../types';

import { DataSourceReadOnlyMessage } from './DataSourceReadOnlyMessage';

export type Props = {
  dataSourceRights: DataSourceRights;
  onDelete: () => void;
};

export function DataSourceLoadError({ dataSourceRights, onDelete }: Props) {
  const { readOnly, hasDeleteRights } = dataSourceRights;
  const canDelete = !readOnly && hasDeleteRights;
  const navigateBack = () => history.back();

  return (
    <>
      {readOnly && <DataSourceReadOnlyMessage />}

      <div className="gf-form-button-row">
        {canDelete && (
          <Button type="submit" variant="destructive" onClick={onDelete}>
            <Trans i18nKey="datasources.data-source-load-error.delete">Delete</Trans>
          </Button>
        )}

        <Button variant="secondary" fill="outline" type="button" onClick={navigateBack}>
          <Trans i18nKey="datasources.data-source-load-error.back">Back</Trans>
        </Button>
      </div>
    </>
  );
}
