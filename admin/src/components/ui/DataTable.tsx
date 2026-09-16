import React from 'react';

export interface Column<T> {
  key: keyof T | string;
  label: string;
  width?: string;
  render?: (item: T) => React.ReactNode;
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
  keyExtractor?: (item: T, index: number) => string | number;
}

export default function DataTable<T>({ 
  columns, 
  data, 
  onRowClick,
  keyExtractor
}: DataTableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-800 bg-admin-panel">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-admin-panel border-b border-gray-800">
            {columns.map((col, idx) => (
              <th 
                key={String(col.key) + idx}
                className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                style={{ width: col.width }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td 
                colSpan={columns.length} 
                className="px-6 py-8 text-center text-gray-500 italic bg-admin-bg"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((item, rowIndex) => {
              const rowKey = keyExtractor ? keyExtractor(item, rowIndex) : rowIndex;
              return (
                <tr 
                  key={rowKey}
                  onClick={() => onRowClick?.(item)}
                  className={`
                    border-b border-gray-800/50 
                    ${rowIndex % 2 === 0 ? 'bg-admin-bg' : 'bg-admin-panel'}
                    ${onRowClick ? 'cursor-pointer hover:bg-gray-800/50 transition-colors' : ''}
                  `}
                >
                  {columns.map((col, colIndex) => (
                    <td 
                      key={String(col.key) + colIndex} 
                      className="px-6 py-4 text-sm text-gray-300"
                    >
                      {col.render 
                        ? col.render(item) 
                        : (item as any)[col.key] as React.ReactNode}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
