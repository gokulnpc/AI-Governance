import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';

export const BiasMatrix: React.FC = () => {
  const data = [
    ['Gender', 0.98, 0.97, 0.99],
    ['Age', 0.95, 0.94, 0.96],
    ['Race', 0.97, 0.96, 0.98],
    ['Location', 0.96, 0.95, 0.97]
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fairness Matrix</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-2">Attribute</th>
                <th className="text-right py-2">Score</th>
                <th className="text-right py-2">Min</th>
                <th className="text-right py-2">Max</th>
              </tr>
            </thead>
            <tbody>
              {data.map(([attribute, score, min, max], index) => (
                <tr key={index} className="border-t">
                  <td className="py-3">{attribute}</td>
                  <td className="text-right">
                    <span className={`px-2 py-1 rounded ${
                      score >= 0.97 ? 'bg-green-100 text-green-800' :
                      score >= 0.95 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {(score * 100).toFixed(1)}%
                    </span>
                  </td>
                  <td className="text-right text-gray-600">{(min * 100).toFixed(1)}%</td>
                  <td className="text-right text-gray-600">{(max * 100).toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};